//-------- CONTROLADOR CATEGORIAS SOUNDBOX --------//

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const db = require("../database/models");

const brandsController = {
	listCategories: async (req, res) => {
		try {
			let categories = await db.Categorias.findAll(); //la tabla se llama 'category' y el alias es 'Categorias'
			res.render("product/categories.ejs", { categories });
		} catch (err) {
			/* console.log(err); */
			res.render("errors/404.ejs");
		}
	},

	categoryProduct: async (req, res) => {
		try {
			let products = await db.Productos.findAll({
				include: [
					{ association: "category", attributes: ["category"] }, //-->Vamos a buscar la marca a través de la relación entre tablas, especificando que solo queremos el nombre de la marca
				],
				where: {'$category.category$':req.params.category } //-->La sintaxis '$brand.brand_name$' indica que estamos haciendo referencia a la tabla asociada 'brand'
			});
			res.render(
				"product/categories.ejs",
				{ products }
			);
		} catch (err) {
			/* console.log(err);  */
			res.render("errors/404.ejs");
		}
	},
};
module.exports = brandsController;
