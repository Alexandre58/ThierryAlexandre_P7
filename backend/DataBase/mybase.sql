-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 11, 2022 at 07:58 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mybase`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `messageId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `content` varchar(1500) DEFAULT NULL,
  `commentLikes` int(11) DEFAULT NULL,
  `commentDislikes` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `messageId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `userLike` tinyint(1) NOT NULL,
  `userDislike` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(2550) NOT NULL,
  `attachment` varchar(2550) DEFAULT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL,
  `comments` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `userId`, `title`, `content`, `attachment`, `likes`, `dislikes`, `comments`, `createdAt`, `updatedAt`) VALUES
(42, 27, 'my post', 'my post is very very good', NULL, 0, 0, 0, '2022-02-08 16:21:26', '2022-02-08 16:21:26'),
(43, 27, 'my post', 'my post is very very good', NULL, 0, 0, 0, '2022-02-08 16:21:49', '2022-02-08 16:21:49'),
(44, 27, 'my post', 'my post is very very good', NULL, 0, 0, 0, '2022-02-08 16:22:09', '2022-02-08 16:22:09'),
(45, 28, 'my post', 'my post is very very good', NULL, 0, 0, 0, '2022-02-08 16:26:10', '2022-02-08 16:26:10'),
(46, 28, 'my post', 'my post is very very good', NULL, 0, 0, 0, '2022-02-08 16:26:18', '2022-02-08 16:26:18'),
(47, 28, ' post de Tim', 'le post de Tim is very very good', NULL, 0, 0, 0, '2022-02-08 16:27:18', '2022-02-08 16:27:18'),
(48, 28, ' encore post de Tim', 'le deuxiéme post de Tim is very very good', NULL, 0, 0, 0, '2022-02-08 16:28:41', '2022-02-08 16:28:41'),
(49, 28, ' encore post de Tim', 'le deuxiéme post de Tim is very very good', NULL, 0, 0, 0, '2022-02-08 18:54:57', '2022-02-08 18:54:57');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210528102102-create-user.js'),
('20210528102442-create-message.js'),
('20210603141226-create-like.js'),
('20210608150254-create-comments.js'),
('20210616142252-create-comments-likes.js'),
('20211113222309-create-post.js'),
('20211113222321-create-user.js'),
('20211113222416-create-category.js'),
('20211113222426-create-comment.js'),
('20211117195213-create-reaction.js'),
('20211129204136-create-mood.js'),
('20211129213019-create-follow.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstname`, `lastname`, `password`, `bio`, `avatar`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(19, 'beatrice.al@groupomania.com', 'beatrice', 'alexandre', '$2a$05$2..mlyl4qnddhWW8noiVReoA0GN72xcP8nDiSFuoGV8SxpJKeogeq', 'je suis la', '/static/media/1.589279a0f8cbe999d00b.jpg', 0, '2022-02-07 14:12:12', '2022-02-07 14:12:12'),
(26, 'tony@groupomania.com', 'Tony', 'AlexandreTony', '$2a$05$WDpPGmtz5yBEk1v57s81juXteX8bHw/XVlWTIe1Za45I2eH4wHkqG', 'jjjdjjjd', '/static/media/fkctWwWEdRrlktfd9elt5.jpg', 0, '2022-02-08 14:15:21', '2022-02-08 14:15:21'),
(27, 'thierry@groupomania.com', 'Thierry', 'Alexandre', '$2a$05$DmQac5fdjELmDba4rdqLLu1XVJIjSNlN6ibHKP2grEv.5XeXfFGQq', 'jjjdjjjd', '/static/media/fkctWwWEdRrlktfd9elt5.jpg', 1, '2022-02-08 14:41:35', '2022-02-08 14:41:35'),
(28, 'tim@groupomania.com', 'Tim', 'Alexandre', '$2a$05$Xo1sz29tLI.CGqzzmLN/5ejDgwZqwNxAjN8vrEryaydQ5Unaz5iwO', 'jjjdjjjd', '/static/media/fkctWwWEdRrlktfd9elt5.jpg', 0, '2022-02-08 16:25:28', '2022-02-08 16:25:28'),
(29, 'Cyndie@groupomania.com', 'Cyndie', 'Alexandre', '$2a$05$RNwDaM8VHLpzB13MSliTROEgqIpTFI/xW4O9/.zOfANVzx6Tz0/7y', 'Je suis contente d^étre au travail aujourd\'hui, et vous?', '/static/media/fkctWwWEdRrlktfd9elt5.jpg', 0, '2022-02-08 18:43:20', '2022-02-08 18:43:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messageId` (`messageId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messageId` (`messageId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `messages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`messageId`) REFERENCES `messages` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
