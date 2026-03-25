
const HomePage = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://aon-task-tracker.vercel.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: '123',
                    phone_number: '123'
            })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    fetchData()
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE3NzAzOTA4NzUsImV4cCI6MTc3MDk5NTY3NX0.rcwLhD9mKmfd14MezQJ-4ts-kEwkB1I4XVh8cUIiCXE"
    const getWeeks = async() => {
        try {
            const weeks = await fetch('https://aon-task-tracker.vercel.app/api/student/weeks', {
                method: 'GET',
                headers: {
                    'Authorization': token,
                },
            });
            const data = await weeks.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }
    getWeeks();
    return (
        <div>
            Home page
        </div>
    )
}

export default HomePage