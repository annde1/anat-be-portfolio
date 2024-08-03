"use server";
//25,26 lessons
function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export async function contact(prevState, formData) {
  try {
    const data = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    if (!validEmail(data.email)) {
      return { ...prevState, message: "Please enter a valid email address." };
    }

    const formSpreeEdnpoint = "https://formspree.io/f/mldrbpjz";
    const res = await fetch(formSpreeEdnpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      return { ...prevState, message: `Error: ${error.error}` };
    }

    return {
      ...prevState,
      message: "Thank you for your message. I will get back to you shortly !",
    };
  } catch (err) {
    // console.log(err);
  }
}
