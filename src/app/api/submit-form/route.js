import connectToDatabase from '@/lib/mongodb';
import FormData from '@/models/FormData';

export async function POST(req) {
  try {
    await connectToDatabase();

    const {
      name,
      gender,
      dob,
      mobileNumber,
      whatsappNumber,
      email,
      occupation,
      school,
      confirmation,
    } = await req.json();

    // Create a new document in MongoDB
    const newFormData = new FormData({
      name,
      gender,
      dob,
      mobileNumber,
      whatsappNumber,
      email,
      occupation,
      school,
      confirmation,
      status: 'pending', 
      eventId: '123',  
    });

   const data = await newFormData.save();

    return new Response(JSON.stringify({ message: 'Form submission successful!' ,data}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error handling form submission:', error);

    let errorMessage = 'Form submission failed!';

    // Check for unique constraint error
    if (error.code === 11000) {
      errorMessage = 'A user with this email already exists!';
    }

    return new Response(JSON.stringify({ message: errorMessage, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
