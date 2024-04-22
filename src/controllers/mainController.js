// Acá nos falta nuestra fuente de datos
const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const db = require("../database/models");

const { log } = require("console");
const { validationResult } = require("express-validator");
const { Op, where } = require("sequelize");

const mainController = {
	index: async (req, res) => {
	
		try {
			let productosVistosBd = [];
			const productosVistos = req.session.lastSeens;

			if(productosVistos && productosVistos.length>0){

			
			productosVistosBd = await db.Productos.findAll({
                where: { // comparamos ke haya coincidencia entre el id de los productos y el array de los last seens
                    id: req.session.lastSeens
                },
                include: [
                    { association: "category", attributes: ["category"] },
                    { association: "brand", attributes: ["brand_name"] },
                    { association: "state", attributes: ["state"] }
                ],
            });

		}

			const topSeller = await db.Productos.findAll({
				where: {
					price: {
						[Op.gt]: 120,
					},
				},
				limit: 10,
			});
			const newsComments = await db.Productos.findAll({
				where: {
					price: {
						[Op.gt]: 80,
					},
				},
				limit: 3,
			});
			const newsAdd = await db.Productos.findAll({
				order: [['id', 'DESC']],
				limit: 3,
			});
			const offerts = await db.Productos.findAll({
				where: {
					discount: {
						[Op.ne]: 0,
					},
				},
			});
			const products = await db.Productos.findAll();

			res.render("index", { 'LastSeenProducts':productosVistosBd, topSeller, offerts, products, newsComments, newsAdd });
		} catch (err) {
			console.log(err);
			res.render("errors/404.ejs");
		}
	},

	admin: async (req, res) => {
		try {
			const users = await db.Usuarios.findAll();
			const products = await db.Productos.findAll();
			res.render("admin.ejs", { users, products });
		} catch (err) {
			console.log(err);
			res.render("errors/404.ejs");
		}
	},

	categories: async (req, res) => {
		try {
			const category = await db.Productos.findAll({
				where: {
					"$category.category$": req.params.nombre,
				},
				include: [
					{ association: "category", attributes: ["category"] },
					{ association: "brand", attributes: ["brand_name"] },
					{ association: "state", attributes: ["state"] }
				],
			});
			res.render("product/categories.ejs", { category });
		} catch (err) {
			console.log(err);
			res.render("errors/404.ejs");
		}
	},

	allCategories: async (req, res) => {
		try {
			res.render("product/allCategories.ejs");
		} catch (err) {
			res.render("errors/404.ejs");
		}
	},

	carrito: async (req, res) => {
		try {
			const products = await db.Productos.findAll();

			res.render("product/productCart.ejs", { products });
		} catch (err) {
			console.log(err);
			res.render("errors/404.ejs");
		}
	},
};

module.exports = mainController;