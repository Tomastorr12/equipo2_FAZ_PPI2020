-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: btnntwo1tjg7uzvjhiwc-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 19, 2020 at 01:43 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `btnntwo1tjg7uzvjhiwc`
--

-- --------------------------------------------------------

--
-- Table structure for table `comunidad`
--

CREATE TABLE `comunidad` (
  `id_comunidad` int(11) NOT NULL,
  `descripcion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comunidad`
--

INSERT INTO `comunidad` (`id_comunidad`, `descripcion`) VALUES
(1, 'ciego'),
(2, 'sordo-mudo'),
(3, 'Sin discapacidad');

-- --------------------------------------------------------

--
-- Table structure for table `conversacion`
--

CREATE TABLE `conversacion` (
  `id` int(11) NOT NULL,
  `Id_usuario1` int(11) DEFAULT NULL,
  `Id_usuario2` int(11) DEFAULT NULL,
  `Fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `conversacion`
--

INSERT INTO `conversacion` (`id`, `Id_usuario1`, `Id_usuario2`, `Fecha`) VALUES
(1, 1, 4, '2020-11-12'),
(2, 2, 3, '2020-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `historial`
--

CREATE TABLE `historial` (
  `id` int(11) NOT NULL,
  `Codigo_qr` int(11) DEFAULT NULL,
  `registro_Chat` varchar(225) NOT NULL,
  `Fecha_sistema` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `historial`
--

INSERT INTO `historial` (`id`, `Codigo_qr`, `registro_Chat`) VALUES
(1, 1, 'fddfdfdfdf'),
(2, 2, 'asasasaaaaaaaaaaaaaaaaaaaaa'),
(3, 1, 'hablmos otro dia');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `id_comunidad` int(11) DEFAULT '1',
  `nombre` varchar(25) DEFAULT NULL,
  `perfil` int(15) DEFAULT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `contraseña` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `id_comunidad`, `nombre`, `perfil`, `correo`, `contraseña`) VALUES
(1, 2, 'asasa', 1, 'jua3n@gmail.com', '123'),
(2, 1, 'asasa', 1, 'jua2n@gmail.com', '123'),
(3, 1, 'Administrador', 1, 'admin122@gmail.com', '123'),
(9, 3, 'Maria', 2, 'Maria@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comunidad`
--
ALTER TABLE `comunidad`
  ADD PRIMARY KEY (`id_comunidad`);

--
-- Indexes for table `conversacion`
--
ALTER TABLE `conversacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Id_usuario` (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `correo_2` (`correo`),
  ADD KEY `id_comunidad` (`id_comunidad`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comunidad`
--
ALTER TABLE `comunidad`
  MODIFY `id_comunidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `conversacion`
--
ALTER TABLE `conversacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `historial`
--
ALTER TABLE `historial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `id_comunidad` FOREIGN KEY (`id_comunidad`) REFERENCES `comunidad` (`id_comunidad`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
