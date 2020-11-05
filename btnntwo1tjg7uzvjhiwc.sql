-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: btnntwo1tjg7uzvjhiwc-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 05, 2020 at 12:48 PM
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
-- Table structure for table `Conversacion`
--

CREATE TABLE `Conversacion` (
  `Codigo_qr` int(11) NOT NULL,
  `Id_usuario1` int(11) DEFAULT NULL,
  `Id_usuario2` int(11) DEFAULT NULL,
  `Fecha_sistema` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Historial`
--

CREATE TABLE `Historial` (
  `Comunidad1` int(11) DEFAULT NULL,
  `Comunidad2` int(11) DEFAULT NULL,
  `Id_usuario1` int(11) DEFAULT NULL,
  `Id_usuario2` int(11) DEFAULT NULL,
  `Msg_user1` int(225) NOT NULL,
  `Msg_user2` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Qr`
--

CREATE TABLE `Qr` (
  `id_usuario` int(11) DEFAULT NULL,
  `code_qr` int(11) DEFAULT NULL,
  `fecha:sys` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Usuarios`
--

CREATE TABLE `Usuarios` (
  `nombre` varchar(25) DEFAULT NULL,
  `id_comunidad` int(11) DEFAULT NULL,
  `perfil` int(15) DEFAULT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `contraseña` varchar(25) DEFAULT NULL,
  `Id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Usuarios`
--

INSERT INTO `Usuarios` (`nombre`, `id_comunidad`, `perfil`, `correo`, `contraseña`, `Id_usuario`) VALUES
(NULL, NULL, NULL, NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Conversacion`
--
ALTER TABLE `Conversacion`
  ADD PRIMARY KEY (`Codigo_qr`);

--
-- Indexes for table `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD UNIQUE KEY `Id_usuario` (`Id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `correo_2` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Conversacion`
--
ALTER TABLE `Conversacion`
  MODIFY `Codigo_qr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
