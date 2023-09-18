create database crm;

use crm;

--
-- Estructura de tabla para la tabla `agent`
--

CREATE TABLE `agent` (
  `Agent_ID` int(10) NOT NULL,
  `Name_agent` varchar(30) NOT NULL,
  `Agent_email` varchar(50) NOT NULL,
  `ID_property` int(10) NOT NULL,
  `ID_customer` int(10) NOT NULL,
  `Time_agent` int(10) NOT NULL,
  `Rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agent_time`
--

CREATE TABLE `agent_time` (
  `Agent_ID` int(10) NOT NULL,
  `entry` date NOT NULL,
  `Exit` date NOT NULL,
  `property_edit` int(10) NOT NULL,
  `complaints` varchar(50) NOT NULL,
  `bonification` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customer`
--

CREATE TABLE `customer` (
  `Csutomer_ID` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `e-mail` varchar(50) NOT NULL,
  `cell_number` int(10) NOT NULL,
  `sales` int(10) NOT NULL,
  `House_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `property`
--

CREATE TABLE `property` (
  `Property_ID` int(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `category_ID` varchar(10) NOT NULL,
  `Customer_ID` int(10) NOT NULL,
  `Time` date NOT NULL,
  `agent_ID` int(10) NOT NULL,
  `Owner_history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `Customer_ID` int(10) NOT NULL,
  `Agent_ID` int(10) NOT NULL,
  `Cost` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`Agent_ID`,`ID_property`,`ID_customer`),
  ADD KEY `ID_customer` (`ID_customer`),
  ADD KEY `ID_property` (`ID_property`);

--
-- Indices de la tabla `agent_time`
--
ALTER TABLE `agent_time`
  ADD PRIMARY KEY (`Agent_ID`);

--
-- Indices de la tabla `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Csutomer_ID`,`House_ID`),
  ADD KEY `House_ID` (`House_ID`);

--
-- Indices de la tabla `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`Property_ID`,`Customer_ID`,`agent_ID`),
  ADD KEY `agent_ID` (`agent_ID`),
  ADD KEY `Customer_ID` (`Customer_ID`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`Customer_ID`,`Agent_ID`),
  ADD KEY `Agent_ID` (`Agent_ID`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `agent_ibfk_1` FOREIGN KEY (`ID_customer`) REFERENCES `customer` (`Csutomer_ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `agent_ibfk_2` FOREIGN KEY (`ID_property`) REFERENCES `property` (`Property_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `agent_time`
--
ALTER TABLE `agent_time`
  ADD CONSTRAINT `agent_time_ibfk_1` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`House_ID`) REFERENCES `property` (`Property_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`agent_ID`) REFERENCES `agent` (`Agent_ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `property_ibfk_2` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Csutomer_ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Csutomer_ID`) ON UPDATE CASCADE;
COMMIT;