const supabase = require("../configs/supabase");

async function signUp(email, password, first_name, last_name) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: first_name,
            last_name: last_name,
          },
        },
      })
  return { data, error };
}

module.exports = {
    signUp,
};

signUp("angelgmorenor@gmail.com", "Test@123", "Angel", "Moreno").then((response) => {
    console.log(response);
  });