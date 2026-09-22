import express from "express";
import path from "path";
import {fileURLToPath} from "url";
const app=express(), dir=path.dirname(fileURLToPath(import.meta.url)), PORT=process.env.PORT||3000;
const prompts=[
["cinematic-portrait","Cinematic Portrait","Portrait","Ultra-realistic cinematic portrait, natural skin texture, soft directional light, shallow depth of field, detailed eyes, professional photography, realistic colors, 85mm lens."],
["1980s-vintage","Authentic 1980s Photo","Vintage","Authentic 1980s photograph, period-accurate hairstyle and clothing, analog film grain, subtle faded colors, direct flash, realistic skin texture, natural expression, documentary photography."],
["luxury-car","Luxury Car Advertisement","Cars","Ultra-realistic luxury car advertisement, dramatic studio lighting, glossy reflections, clean premium background, sharp details, professional automotive photography, 16:9 composition."],
["fantasy-landscape","Epic Fantasy Landscape","Fantasy","Epic fantasy landscape at sunrise, towering mountains, misty valley, atmospheric depth, cinematic lighting, highly detailed environment, realistic textures, wide-angle composition."],
["studio-product","Premium Product Photography","Product","Professional product photography, centered composition, clean studio background, softbox lighting, realistic shadows, crisp material texture, commercial catalog quality."],
["warm-family","Warm Family Portrait","Family","Warm realistic family portrait, preserve each person's recognizable facial features and natural skin tones, relaxed expressions, soft natural window light, authentic photography, no plastic skin."],
["beach-fashion","Cinematic Beach Fashion","Fashion","Ultra-realistic cinematic beach fashion photograph, natural skin texture, elegant coordinated outfit, golden-hour sunlight, realistic fabric movement, wet sand reflections, professional editorial photography."],
["romantic-couple","Romantic Couple Portrait","Couple","Romantic cinematic couple portrait, preserve both identities and natural facial features, warm sunset light, subtle expressions, realistic skin texture, natural body proportions, professional photography."],
["travel-drone","Travel Drone View","Travel","Cinematic aerial travel photograph, sweeping landscape, realistic atmospheric haze, natural colors, detailed environment, high dynamic range, professional drone photography."],
["neon-city","Neon City Night","Cinematic","Ultra-realistic cinematic night city scene, neon reflections on wet streets, atmospheric mist, realistic lighting, detailed architecture, 35mm photography, dramatic composition."],
["superhero-kid","Family-Friendly Superhero","Fantasy","Family-friendly cinematic superhero portrait of a young hero, age-appropriate costume, dynamic rooftop setting, dramatic sky, realistic face and natural skin texture, no violence, photorealistic."],
["film-camera","Analog Film Portrait","Vintage","Natural analog film portrait, subtle film grain, authentic lens character, gentle contrast, realistic skin texture, imperfect photographic details, nostalgic documentary feeling."]
].map(x=>({id:x[0],title:x[1],category:x[2],prompt:x[3]}));
const blocked=[/\b(child|minor|underage|under\s*18)\b.*\b(nude|naked|sexual|sex|porn|explicit)\b/i,/\b(nude|naked|sexual|porn|explicit)\b.*\b(child|minor|underage|under\s*18)\b/i,/\b(sexualize|sexualised|sexualized)\b.*\b(child|minor|underage)\b/i,/\bnon[-\s]?consensual\b.*\b(sex|nude|naked|intimate|porn)\b/i,/\b(revenge\s*porn|nonconsensual\s*intimate)\b/i];
function check(t){if(!t.trim())return"Please enter a search term or prompt.";if(t.length>2000)return"Please keep the text under 2,000 characters.";if(blocked.some(r=>r.test(t)))return"This request is blocked for safety.";return null}
app.use(express.json({limit:"20kb"}));app.use(express.static(path.join(dir,"public")));
app.get("/api/prompts",(req,res)=>{let q=String(req.query.q||"").toLowerCase(),c=String(req.query.category||"All");let a=prompts.filter(p=>c==="All"||p.category===c);if(q)a=a.filter(p=>(p.title+" "+p.category+" "+p.prompt).toLowerCase().includes(q));res.json(a)});
app.get("/api/categories",(req,res)=>res.json([...new Set(prompts.map(p=>p.category))]));
app.post("/api/check",(req,res)=>{let e=check(String(req.body?.prompt||""));e?res.status(400).json({ok:false,message:e}):res.json({ok:true})});
app.get("*",(req,res)=>res.sendFile(path.join(dir,"public","index.html")));
app.listen(PORT,()=>console.log("Prompt Finder V2 running on port "+PORT));