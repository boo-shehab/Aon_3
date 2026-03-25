const express = require("express");
const { Pool } = require("pg");

const app = express();

const PROT = 3000;


app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "aon_4",
    password: "12345678",
    port: 5432
})

app.get("/", (req, res) => {
    res.send("Hello world")

})

app.get("/students", async(req, res) => {
    try {
        const result = await pool.query("SELECT * FROM students")
        res.json(result.rows)

    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: `not found`});
    }
    
})

app.get("/students/:id", async (req, res) => {
    try {
        const studentId = req.params.id
        const result = await pool.query("SELECT * FROM students WHERE student_id = $1", [studentId])

        if(result.rows.length === 0) {
            res.status(404).json({message: "student not found"});
        }

        res.json(result.rows[0]);

    } catch (e) {
        console.log(e.message);
        res.status(500).json({message: "server error"})
        
    }
})

app.post("/students", async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            date_of_birth,
            gpa,
            phone_number,
            gender,
            dept_id
        } = req.body;

        if(!first_name | !last_name | email | !phone_number) {
            res.status(400).json({message: "some data are not found"})
        }

        const checkEmail = await pool.query("SELECT email FROM students WHERE email = $1", [email]);
        console.log(checkEmail.rows);
        
        if(checkEmail.rows.length === 1){
            res.json({message: "email is found"})
        }

        const checkDept = await pool.query("SELECT dept_id FROM departments WHERE dept_id = $1", [dept_id]);
        
        if(checkDept.rows.length === 0){
            res.json({message: "department is not found"})
        }
    

        const inserQuery = "INSERT INTO students ( first_name, last_name, email, date_of_birth, gpa, phone_number, gender, dept_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
        const values = [
            first_name,
            last_name,
            email,
            date_of_birth,
            gpa,
            phone_number,
            gender,
            dept_id];
            const result = await pool.query(inserQuery, values);

            res.json({newStudent: result.rows[0]})
    } catch(e) {
        console.log(e.message);
        res.status(500).json({message: "server error :" + e.message})
    }
})



app.listen(PROT, () => console.log(`work on http://localhost:${PROT}`));