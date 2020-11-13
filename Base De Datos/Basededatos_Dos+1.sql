-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: btnntwo1tjg7uzvjhiwc-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 13, 2020 at 02:53 PM
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
(2, 'sordos'),
(3, 'mudo'),
(4, 'sordo-mudo');

-- --------------------------------------------------------

--
-- Table structure for table `conversacion`
--

CREATE TABLE `conversacion` (
  `Codigo_qr` int(11) NOT NULL,
  `Id_usuario1` int(11) DEFAULT NULL,
  `Id_usuario2` int(11) DEFAULT NULL,
  `Fecha_sistema` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `conversacion`
--

INSERT INTO `conversacion` (`Codigo_qr`, `Id_usuario1`, `Id_usuario2`, `Fecha_sistema`) VALUES
(1, 1, 1, '2020-11-12'),
(2, 2, 3, '2020-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `historial`
--

CREATE TABLE `historial` (
  `id_historial` int(11) NOT NULL,
  `Codigo_qr` int(11) DEFAULT NULL,
  `registro_Chat` varchar(225) NOT NULL,
  `Fecha_sistema` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `historial`
--

INSERT INTO `historial` (`id_historial`, `Codigo_qr`, `registro_Chat`) VALUES
(1, 1, 'fddfdfdfdf'),
(2, 2, 'asasasaaaaaaaaaaaaaaaaaaaaa'),
(3, 1, 'hablmos otro dia');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_usuario` int(11) NOT NULL,
  `id_comunidad` int(11) DEFAULT '1',
  `nombre` varchar(25) DEFAULT NULL,
  `perfil` int(15) DEFAULT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `contraseña` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`Id_usuario`, `id_comunidad`, `nombre`, `perfil`, `correo`, `contraseña`) VALUES
(1, 1, 'asasa', 1, 'jua3n@gmail.com', '123'),
(2, 1, 'asasa', 1, 'jua2n@gmail.com', '123'),
(3, 1, 'Administrador', 1, 'admin122@gmail.com', '123'),
(9, 1, 'Maria', 2, 'Maria@gmail.com', '123');

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
  ADD PRIMARY KEY (`Codigo_qr`);

--
-- Indexes for table `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`id_historial`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD UNIQUE KEY `Id_usuario` (`Id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `correo_2` (`correo`);

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
  MODIFY `Codigo_qr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `historial`
--
ALTER TABLE `historial`
  MODIFY `id_historial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
