import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index.ejs", {title:'TecnoCrops'}));
router.get("/about", (req, res) => res.render("about", {title:'About'}));
router.get("/contact", (req, res) => res.render("contact",{title:'Contact'}));

export default router;
