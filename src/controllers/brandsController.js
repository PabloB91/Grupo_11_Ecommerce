//-------- CONTROLADOR MARCAS SOUNDBOX --------//

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const imagesDir= path.join(__dirname,'../../public/img/brands') //-->Directorio de las imágenes de las marcas

const images= fs.readdirSync(imagesDir)	//-->Lectura del nombre de cada imagen



const brandsController = {
	listBrands: async (req, res) => {
		try {
			let brands = await db.Marcas.findAll();
			res.render(
				"product/brandsList.ejs",
				{ brands, images }	//-->Renderizamos las marcas y las imágenes
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
					{ association: "brand", attributes: ["brand_name"] },  //-->Vamos a buscar la marca a través de la relación entre tablas, especificando que solo queremos el nombre de la marca
					{ association: "category", attributes: ["category"] },
					{ association: "state", attributes: ["state"] }
				],
				where: {'$brand.brand_name$':req.params.brand_name } //-->La sintaxis '$brand.brand_name$' indica que estamos haciendo referencia a la tabla asociada 'brand'
			});
			res.render(
				"product/brandsProducts.ejs",
				{ products }
			);
		} catch (err) {
			/* console.log(err);  */
			res.render("errors/404.ejs");
		}
	},
};
module.exports = brandsController;
