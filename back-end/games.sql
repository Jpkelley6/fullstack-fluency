DROP TABLE IF EXISTS games;

CREATE TABLE games (
    game_id serial,
    game_name varchar (40),
    game_platform varchar (40),
    game_type varchar (40)
);

INSERT INTO games (game_name, game_platform, game_type) VALUES
('StarCraft', 'PC', 'RTS'),
('Age of Empires', 'PC', 'RTS'),
('Path of Exile', 'PC or console', 'ARPG'),
('Diablo 2', 'PC', 'ARPG'),
('World of Warcraft', 'PC', 'MMORPG'),
('Hello Kitty Island Adventure', 'PC', 'RPG'),
('DOTA 2', 'PC', 'MOBA'),
('League of Legends', 'PC', 'MOBA'),
('FFVII', 'Console', 'RPG'),
('Call of Duty', 'PC or Console', 'FPS'),
('Tony Hawk Proskater', 'Console', 'RPG'),
('Monopoly', 'Board Game', 'Strategy'),
('Sorry', 'Board Game', 'Strategy');
