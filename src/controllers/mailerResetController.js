const nodemailer = require("nodemailer");
const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const db = require("../database/models");

const resetPasswordController = {
	getSendMail: (req, res) => {
		res.render("resetPasswordForm");
	},
	sendMailProcess: async (req, res) => {
		try {
			const userEmail = req.body.email;
			const storeOwnerEmail = "soundboxmusicstore@gmail.com";

			const transporter = nodemailer.createTransport({
				host: "smtp.gmail.com",
				port: 465,
				secure: true,
				auth: {
					user: storeOwnerEmail,
					pass: "5t0r3mus1c2023",
				},
			});

			const userResetLink =
				"http://localhost:3020/reset/password/";

			const userInfo = await transporter.sendMail({
				from: `"SoundBox Music Store" <${storeOwnerEmail}>`,
				to: userEmail,
				subject: "Reset your password",
				html: `<p>Click the link below to reset your password:</p><a href="${userResetLink}">Reset Password</a>`,
			});

			const storeOwnerInfo = await transporter.sendMail({
				from: `"SoundBox Music Store" <${storeOwnerEmail}>`,
				to: storeOwnerEmail,
				subject: "Password Reset Request",
				html: `<p>A user requested to reset their password. Here's the user's email:</p><p>${userEmail}</p><p>And here's the reset link:</p><p>${userResetLink}</p>`,
			});

			res.redirect("/");
		} catch (err) {
			res.render("errors/404.ejs");
			console.log(err);
		}
	},
	resetPassword: async (req, res) => {
		try {
/* Traer la contraseña de la db */

/* Validar que el mail / id sea el mismo del usuario */

/* Si el id / email es el mismo. que se importe la contraseña de la db */

/* Despues de importar la contraseña que se valide si la contraseña q esta ingresando */
			/* const passwordConfirmBefore = await db.Usuarios.findByPk(req.params.e_mail, {
				
			})

			let userToEdit = await db.Usuarios.update(
				{
					password: 
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);

			return res.redirect(req.params.id); */
		} catch (err) {
			return res.render("errors/404.ejs");
		}
	}
};

module.exports = resetPasswordController;
