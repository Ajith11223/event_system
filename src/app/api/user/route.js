

export async function GET(req) {
    // Sample user data
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    };
  
    // Respond with the user data as JSON
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  