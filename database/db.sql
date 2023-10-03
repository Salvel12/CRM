-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2023 a las 03:44:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agent`
--

CREATE TABLE `agent` (
  `agent_id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `time` date NOT NULL,
  `rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agent`
--

INSERT INTO `agent` (`agent_id`, `name`, `email`, `time`, `rol`) VALUES
(1, 'Agente1', 'agente@gmail.com', '2023-08-14', 'Vendedor'),
(2, 'Agente2', 'agente2@gmail.com', '2023-06-06', 'Buscador'),
(3, 'Agente3', 'agente3@gmail.com', '2023-06-05', 'Buscador');

--
-- Disparadores `agent`
--
DELIMITER $$
CREATE TRIGGER `delete-agent-customer` BEFORE DELETE ON `agent` FOR EACH ROW DELETE FROM customer WHERE agent_id = OLD.agent_id
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `delete-agent-property` BEFORE DELETE ON `agent` FOR EACH ROW DELETE FROM property WHERE agent_id = OLD.agent_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agent_time`
--

CREATE TABLE `agent_time` (
  `agent_id` int(10) NOT NULL,
  `exit` date NOT NULL,
  `entry` date NOT NULL,
  `complaints` varchar(50) NOT NULL,
  `bonification` varchar(50) NOT NULL,
  `property_edit` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL,
  `sales` int(10) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `e-mail` varchar(50) DEFAULT NULL,
  `cell_number` int(11) DEFAULT NULL,
  `agent_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `customer`
--

INSERT INTO `customer` (`customer_id`, `sales`, `name`, `e-mail`, `cell_number`, `agent_id`) VALUES
(2, 300000, 'Cliente Default', 'Cliente@gmail.com', 314755908, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `history`
--

CREATE TABLE `history` (
  `history_id` int(10) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `cost` int(10) DEFAULT NULL,
  `date` date NOT NULL,
  `customer_id` int(10) NOT NULL,
  `property_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `history`
--

INSERT INTO `history` (`history_id`, `rol`, `cost`, `date`, `customer_id`, `property_id`) VALUES
(2, 'Tenant', 2147483647, '2023-06-13', 2, 11),
(3, 'Owner', 4444, '2023-06-13', 2, 11),
(4, 'Owner', 4444, '2023-06-13', 2, 11),
(5, 'Owner', 4444, '2023-06-13', 2, 11),
(6, 'Owner', 4444, '2023-06-13', 2, 11),
(7, 'Owner', 4444, '2023-06-13', 2, 11),
(8, 'Tenant', 99999, '2023-06-22', 2, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `property`
--

CREATE TABLE `property` (
  `property_id` int(10) NOT NULL,
  `property_type` varchar(10) NOT NULL,
  `property_bussines_type` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `rooms` int(2) NOT NULL,
  `bathrooms` int(2) NOT NULL,
  `green_zone` varchar(3) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL,
  `meters` int(3) NOT NULL,
  `agent_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `property`
--

INSERT INTO `property` (`property_id`, `property_type`, `property_bussines_type`, `address`, `price`, `rooms`, `bathrooms`, `green_zone`, `meters`, `agent_id`) VALUES
(11, 'Apartment', 'Lease', 'EternalD6', 4444, 3, 2, 'Yes', 80, 3),
(12, 'Apartment', 'Lease', 'Death Cert', 99999, 3, 2, 'No', 71, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`agent_id`);

--
-- Indices de la tabla `agent_time`
--
ALTER TABLE `agent_time`
  ADD PRIMARY KEY (`agent_id`);

--
-- Indices de la tabla `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `agent_id` (`agent_id`);

--
-- Indices de la tabla `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`history_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `property_id` (`property_id`);

--
-- Indices de la tabla `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `agent_id` (`agent_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agent`
--
ALTER TABLE `agent`
  MODIFY `agent_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1234568;

--
-- AUTO_INCREMENT de la tabla `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agent_time`
--
ALTER TABLE `agent_time`
  ADD CONSTRAINT `agent_time_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
