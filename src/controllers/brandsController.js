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

	brandProducts: async (req, res) => {
		try {
			let products = await db.Productos.findAll({
				include: [
					{ association: "brand", attributes: ["brand_name"] }, // Vamos a buscar la marca a través de la relación entre tablas, especificando que solo queremos el nombre de la marca
				],
				/*where: {brand_name: req.params.brand_name} Necesitamos identificar la manera correcta de obtener el nombre de la marca de los productos a través del id de cada marca*/ 
			});
			console.log(products);

			res.render(
				"product/brandsProducts.ejs",
				{ products }
			);
		} catch (err) {
			console.log(err);
			res.render("errors/404.ejs");
		}
	},
};
module.exports = brandsController;
