create database crm;

use crm;

-- Estructura de tabla para la tabla `agent`

CREATE TABLE `agent` (
  `agent_id` int(10) NOT NULL AUTO_INCREMENT,
  `time` date NOT NULL,
  `rol` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`agent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

-- Estructura de tabla para la tabla `agent_time`

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
-- Estructura de tabla para la tabla `agent_properties`
--

CREATE TABLE `agent_properties` (
  `agent_id` int(10) NOT NULL,
  `property_id` int(10),
  PRIMARY KEY (`agent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agent_customer`
--

CREATE TABLE `agent_customer` (
  `agent_id` int(10) NOT NULL,
  `customer_id` int(10),
  PRIMARY KEY (`agent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL AUTO_INCREMENT,
  `sales` int(10),
  `name` varchar(30),
  `e-mail` varchar(50),
  `cell_number` int(10),
  `property_id` int(10),
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `property`
--

CREATE TABLE `property` (
  `property_id` int(10) NOT NULL AUTO_INCREMENT,
  `time` date NOT NULL,
  `owner_history` text NOT NULL,
  `address` varchar(100) NOT NULL,
  `property_type` varchar(10) NOT NULL,
  `agent_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  PRIMARY KEY (`property_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `Cost` int(100) NOT NULL,
  `agent_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Índices para tablas volcadas

-- Indices de la tabla `agent_time`

ALTER TABLE `agent_time`
  ADD PRIMARY KEY (`agent_id`);

--
-- Indices de la tabla `agent_properties`
--
ALTER TABLE `agent_properties`
  ADD KEY (`property_id`);

--
-- Indices de la tabla `agent_customer`
--
ALTER TABLE `agent_customer`
  ADD KEY (`customer_id`);

--
-- Indices de la tabla `customer`
--
ALTER TABLE `customer`
  ADD KEY `property_id` (`property_id`);

--
-- Indices de la tabla `property`
--
ALTER TABLE `property`
  ADD KEY `agent_id` (`agent_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `agent_id` (`agent_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agent_time`
--
ALTER TABLE `agent_time`
  ADD CONSTRAINT `agent_time_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `agent_properties`
--
ALTER TABLE `agent_properties`
  ADD CONSTRAINT `agent_properties_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `agent_properties_ibfk_2` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `agent_customer`
--
ALTER TABLE `agent_customer`
  ADD CONSTRAINT `agent_customer_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `agent_customer_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `property_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`agent_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE;
COMMIT;