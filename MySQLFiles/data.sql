/* ---------------------- USUARIOS ---------------------- */
INSERT INTO user_type
(user_type)
VALUES ('admin'),('common_user');

INSERT INTO country
(country)
VALUES 
('Antigua y Barbuda'),('Argentina'),('Bahamas'),('Barbados'),('Belice'),('Bolivia'),('Brasil'),('Canada'),('Chile'),('Colombia'),('Costa Rica'),('Cuba'),('Dominicana'),('El Salvador'),('Estados Unidos'),('Granada'),('Guatemala'),('Guyana'),('Haiti'),('Honduras'),('Jamaica'),('Mexico'),('Nicaragua'),('Panama'),('Paraguay'),('Peru'),('Republica Dominicana'),('San Cristobal y Nieves'),('Santa Lucia'),('Surinam'),('Trinidad y Tobago'),('Uruguay'),('Venezuela'),("Sin Definir");

INSERT INTO soundbox.user
(id, first_name, last_name, password, e_mail, image, registered_date, user_type_id, country_id)
VALUES
(1, 'Miguel Ángel', 'Vargas Navarro', '$2a$10$qOXjMZlLURip7CodLiLi/Oc1RY.hv4zIotSPZgv0lm5xwm3Ju6WSC' , 'mvargasnavarro19@gmail.com','user-1709673238622.png','2005-01-14', 1, 2),
(2, 'Francisco', 'Capitani', '$2a$10$jxgJNkVU4f9q2J3lvZhUtukmIta.MTgDiPzlrLvAlA0K490jS1esG', 'ftcapitani@gmail.com', "user-1709672974782.jpg", '2024-03-21', 1, 1),
(3, 'Alvaro', 'Ramirez Rojas', '$2a$10$DZFCIljx6ix.BaKCq5uCiuACFeJrCcfJMts15gR5xVhMyIWOwd0BG', 'alvarorr@gmail.com', 'user-1709672545109.jpg','2024-03-05', 2, 1),
(4, 'Melena ', 'Gomez Pereira', '$2a$10$wcMyhj31oIqjUBVpMfphOObChOAJGgdnva.l0d/9RwkviQBIdA7I2', 'muchopelo@gmail.com', 'user-1709672662977.jpg', '2024-03-05', 2, 2),
(5, 'Camila', 'Bautista Fosh', '$2a$10$Tgwp3HaDp.BlhT552Al3N.KvBUuXLXYpHJrChe96IgHmxR8E.et76', 'camilabf@gmail.com', 'user-1709672783164.jpg', '2024-03-05', 2, 2),
(6, 'Mateo', 'Armando Cazasa', '$2a$10$4gZTx3g67fhcPINv7bED6exD.JZg621lJgvZs5JD0RXdWqjrGXpFO', 'javierac@gmail.com', 'user-1709672844054.jpg',  '2024-03-05', 2, 1),
(7, 'Phonix', 'Alvarez Cabello', '$2a$10$m0HHT0Oz8f4hrqlTMWRhs.2I65kimtZt1s/9lSqsrmkhfGzNb8ta6', 'mateoac@gmail.com', 'user-1709672974782.jpg',  '2024-03-05', 2, 2),
(8, 'Francisco', 'Espejo Castro', '$2a$10$wiVOwFOWyX.dlWrHnjttDurhNjXIfsWB3myCk8/Gq1.g9I4gweKhG', 'phonixec@gmail.com', 'user-1709673066028.jpg',  '2024-03-05', 2, 2);


/* ---------------------- PRODUCTO ---------------------- */
INSERT INTO color  
(color_name)
VALUES ('Rojo'),('Amarillo'),('Azul'),('Negro');

INSERT INTO brand 
(brand_name)
VALUES ('BOSS'),('DAddario'),('Epiphone'),('Gibson'),('Marshall'),('Yamaha'),('Zildjian');

INSERT INTO category
(category)
VALUES ('Guitarras'),('Orquestas'),('Grabaciones'),('Efectos'),('Accesorios'),('Amplificadores'), ('Segunda Mano'), ('Pianos');

INSERT INTO state
(state)
VALUES ('Mas Vendido'),('Ultimo Visto'),('Recien Agregado');

INSERT INTO soundbox.product
(id, name, description, image, quantity, price, discount, brand_id, category_id, state_id)
VALUES
(1, 'Guitarra Acústica Roja', 'Guitarra acústica de color rojo vibrante', 'guitarra-3.jpg', 10, 299.99, 10, 4, 1, 3),
(2, 'Batería Yamaha Negra', 'Set de batería profesional en color negro', 'tambor-nigga.jpg', 5, 799.99, 30, 6, 2, 3),
(3, 'Piano de Cola Azul', 'Elegante piano de cola azul con acabado brillante', 'piano-azul.jpg', 2, 4999.99, 40, 7, 8, 2),
(4, 'Pedal de Efectos Amarillo', 'Pedal de efectos para guitarra en color amarillo brillante', 'pedal-efectos.jpg', 15, 99.99, 90, 1, 4, 3),
(5, 'Amplificador Marshall Clásico', 'Amplificador icónico de la marca Marshall', 'amplificador-clasico.jpg', 8, 399.99, 5, 5, 6, 3),
(6, 'Violín Negro', 'Violín profesional en color negro elegante', 'orquesta-3.jpg', 3, 499.99, 0, 2, 2, 3),
(7, 'Saxofón Azul', 'Saxofón de alta calidad en tono azul brillante', 'saxofone-azul.jpg', 4, 699.99, 0, 2, 2, 3),
(8, 'Micrófono de Estudio Negro', 'Micrófono de condensador para grabaciones en color negro', 'microfono-negro.jpg', 12, 149.99, 0, 3, 3, 3),
(9, 'Cuerdas para Guitarra Amarillas', 'Set de cuerdas para guitarra eléctrica en color amarillo', 'cuerdas-gibson.jpg', 20, 19.99, 0, 4, 5, 3),
(10, 'Teclado Yamaha Rojo', 'Teclado electrónico Yamaha en rojo llamativo', 'piano-yamaha-rojo.jpg', 6, 299.99, 25, 6, 8, 2),
(11, 'Trompeta Dorada', 'Trompeta profesional en tono dorado brillante', 'trompeta-dorada.jpg', 3, 399.99, 55, 2, 2, 1),
(12, 'Caja de Batería Zildjian', 'Caja de batería de alta calidad de la marca Zildjian', 'platillos-zildjian.jpg', 7, 129.99, 15, 7, 2, 2),
(13, 'Guitarra Eléctrica Azul', 'Guitarra eléctrica en azul metálico', 'guitarra-clasica.jpg', 10, 349.99, 0, 3, 1, 1),
(14, 'Pandereta Amarilla', 'Pandereta profesional en color amarillo brillante', 'pandereta-amarilla.jpg', 5, 29.99, 0, 2, 2, 1),
(15, 'Bajo Negro', 'Bajo eléctrico en color negro clásico', 'guitarra-1.jpg', 4, 299.99, 0, 3, 1, 1),
(16, 'Acordeón Rojo', 'Acordeón de alta calidad en rojo intenso', 'acordeon-rojo.jpg', 2, 799.99, 21, 2, 7, 1),
(17, 'Piano Digital Azul', 'Piano digital en azul moderno', 'piano-azul.jpg', 3, 999.99, 44, 7, 8, 1),
(18, 'Pedal de Distorsión Amarillo', 'Pedal de distorsión en amarillo llamativo', 'pedal-efectos.jpg', 8, 79.99, 95, 1, 4, 1),
(19, 'Amplificador Marshall Rojo', 'Amplificador clásico en rojo vibrante', 'amplificador-rojo.jpg', 6, 499.99, 0, 5, 6, 1),
(20, 'Flauta Negra', 'Flauta profesional en negro elegante', 'clarinete-negro.jpg', 4, 199.99, 20, 2, 2, 1),
(21, 'Trombón Azul', 'Trombón de alta calidad en azul brillante', 'trombon-azul.jpg', 3, 349.99, 0, 2, 7, 1),
(22, 'Interfaz de Audio Negra', 'Interfaz de audio profesional en negro mate', 'interfaz-audio.jpg', 10, 249.99, 0, 3, 4, 2),     
(23, 'Cuerdas para Bajo Amarillas', 'Set de cuerdas para bajo en amarillo brillante', 'cuerdas-gibson.jpg', 15, 24.99, 0, 4, 5, 3),
(24, 'Sintetizador Yamaha Rojo', 'Sintetizador Yamaha en rojo intenso', 'teclado-rojo.jpg', 5, 599.99, 0, 6, 8, 1),
(25, 'Clarinete Negro', 'Clarinete profesional en negro clásico', 'clarinete-negro.jpg', 3, 299.99, 0, 2, 2, 3);

INSERT INTO product_color
(product_id, color_id)
VALUES 
(1,1),
(1,2),
(2,4),
(3,3),
(4,2),
(4,3),
(4,1),
(5,4),
(6,3),
(7,3),
(8,4),
(9,2),
(9,1),
(9,3),
(10,1),
(11,2),
(11,1),
(12,2),
(13,3),
(14,1),
(15,4),
(16,1),
(17,3),
(18,2),
(19,2),
(20,4),
(21,3),
(22,4),
(23,2),
(24,1),
(25,4);
