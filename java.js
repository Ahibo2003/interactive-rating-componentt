const container = document.querySelector(".container");
const allBtn = document.querySelectorAll(".btn > button");
const submit = document.querySelector("#sud");

let java = null;

allBtn.forEach((element) => {
  element.addEventListener("click", () => {
    java = element.innerText;
    console.log("الرقم المختار هو: " + java);

    // تلوين الزر المختار فقط بالبرتقالي ليعرف المستخدم أنه اختار
    allBtn.forEach((btn) => (btn.style.backgroundColor = ""));
    element.style.backgroundColor = "#fb7413";
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (java !== null) {
    // 👈 ركزي هنا: وضعنا علامة الـ Backtick السحرية في أول السطر رقم 24
    container.innerHTML =   `
      <div class="thanks" style="text-align: center; padding: 20px;">
        <img
          src="illustration-thank-you.svg"
          alt="Thank You"
          style="margin-bottom: 20px;"
        />
        <p style="color: #fb7413; background-color: #272e38; display: inline-block; padding: 5px 15px; border-radius: 20px;">
          You selected ${java} out of 5
        </p>
        <h1 style="color: white; margin-top: 10px;">Thank you!</h1>
        <h4 style="color: #959eac; font-weight: normal; line-height: 1.6;">
          We appreciate you taking the time to give a rating.
          <br />
          If you ever need more support, don't hesitate to
          <br /> get in touch!
        </h4>
      </div>
    `; // 👈 وأغلقناها هنا في نهاية كود الـ HTML
  } else {
    alert("الرجاء اختيار رقم تقييم أولاً قبل الضغط على Submit!");
  }
});
