export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;
    
    // For now, just logging the message
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      message
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Message received successfully!' }), 
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to process message' }), 
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 