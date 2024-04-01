//-------- CONTROLADOR MARCAS SOUNDBOX --------//

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const brandsController = {
	listBrands: async (req, res) => {
		try {
			let brands = await db.Marcas.findAll();
			res.render(
				"product/brandsList.ejs",
				{ brands }
			);
		} catch (err) {
			/* console.log(err); */
			res.render("errors/404.ejs");
		}
	},
};
module.exports = brandsController;
