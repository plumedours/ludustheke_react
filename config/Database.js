import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
	host: 'localhost',
	user: 'Admin',
	password: 'admin123',
	database: 'ludusthekestrapi',
});

// TEST
// import mysql from 'mysql';

// const db = mysql.createConnection({
// 	host: "localhost",
// 	user: "Admin",
// 	password: "admin123",
// 	database: "ludusthekestrapi",
//   });

export default db;