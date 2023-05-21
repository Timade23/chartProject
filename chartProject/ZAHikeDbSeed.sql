INSERT INTO Regions (Id, Code, Name, Area, Lat, Long, Population) 
VALUES ('b950ddf5-e9ad-47ff-9d2a-57259014fae6', 'WC', 'Western Cape Region', 129462, -35.3708304, 172.5717825, 7212142);
INSERT INTO Regions (Id, Code, Name, Area, Lat, Long, Population) 
VALUES ('907f54ba-2142-4719-aef9-6230c23bd7de', 'KZN', 'KwaZuluNatal Region', 94361, -36.5253207, 173.7785704, 11538325);
INSERT INTO Regions (Id, Code, Name, Area, Lat, Long, Population) 
VALUES ('79e9872d-5a2f-413e-ac36-511036ccd3d4', 'GP', 'Gauteng Region', 18178, -37.5144584, 174.5405128, 16098571);
INSERT INTO Regions (Id, Code, Name, Area, Lat, Long, Population) 
VALUES ('68c2ab66-c5eb-40b6-81e0-954456d06bba', 'NW', 'Northwest Region', 104882, -37.5328259, 175.7642701, 4186984);



INSERT INTO TrailDifficulty (Id, Code)
VALUES ('4c2b95e0-2022-4a8f-b537-eb3a32786b06', 'Easy');
INSERT INTO TrailDifficulty (Id, Code)
VALUES ('a1066e97-c7c8-4aee-905b-61bb31d82bfb', 'Medium');
INSERT INTO TrailDifficulty (Id, Code)
VALUES ('30f96ef9-7b45-42f7-9fab-05a70e7fc394', 'Hard');



INSERT INTO Trails (Id, Name, Length, TrailDifficultyId, RegionId)
VALUES ('b950ddf5-e9ad-47ff-9d2a-57259014fae6', 'Palmiet River Walk Trail', 10 , '30f96ef9-7b45-42f7-9fab-05a70e7fc394', 'b950ddf5-e9ad-47ff-9d2a-57259014fae6');
INSERT INTO Trails (Id, Name, Length, WalkDifficultyId, RegionId)
VALUES ('907f54ba-2142-4719-aef9-6230c23bd7de', 'Giba George Trail', 10 , 'a1066e97-c7c8-4aee-905b-61bb31d82bfb', '907f54ba-2142-4719-aef9-6230c23bd7de');
INSERT INTO Trails (Id, Name, Length, WalkDifficultyId, RegionId)
VALUES ('79e9872d-5a2f-413e-ac36-511036ccd3d4', 'Umhlanga Lagoon Trail', 2 , '4c2b95e0-2022-4a8f-b537-eb3a32786b06', '907f54ba-2142-4719-aef9-6230c23bd7de');
INSERT INTO Trails (Id, Name, Length, WalkDifficultyId, RegionId)
VALUES ('68c2ab66-c5eb-40b6-81e0-954456d06bba', 'Korsman Bird Sanctuary Loop Trail', 2.6 , '4c2b95e0-2022-4a8f-b537-eb3a32786b06', '79e9872d-5a2f-413e-ac36-511036ccd3d4');
INSERT INTO Trails (Id, Name, Length, WalkDifficultyId, RegionId)
VALUES ('4c2b95e0-2022-4a8f-b537-eb3a32786b06', 'Magalies Adventure Trail', 20 , '30f96ef9-7b45-42f7-9fab-05a70e7fc394', '68c2ab66-c5eb-40b6-81e0-954456d06bba');
INSERT INTO Trails (Id, Name, Length, WalkDifficultyId, RegionId)
VALUES ('a1066e97-c7c8-4aee-905b-61bb31d82bfb', 'Harties River Hiking Trail', 10 , 'a1066e97-c7c8-4aee-905b-61bb31d82bfb', '68c2ab66-c5eb-40b6-81e0-954456d06bba');
