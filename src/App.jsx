import "./App.css";
import Card from "./Card";
import photo_1 from "./assets/photo_1.png";
import photo_2 from "./assets/photo_2.png";
import photo_3 from "./assets/photo_3.png";

function App() {
  return (
    <div className="flex flex-col bg-[url('/Background_image.svg')] bg-cover bg-center min-h-screen bg-[#121826] font-Sora text-white">
      <div className="flex flex-col items-center justify-center gap-2 mb-10 px-4">
        <h1 className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold mt-10 text-center text-[#E5E7EB] max-w-3xl">
          Quality feedbacks for your SaaS products
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#9DA3AE] text-center">
          The blocks & components you need
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-10 sm:gap-12 lg:gap-20 px-4 pb-16">
        <Card
          tag="✋"
          tag_bg="#FCEED8"
          title="Collect Feedback at Multiple Touchpoints"
          description="Provide a comprehensive understanding of the customer experience."
          image={photo_2}
        />
        <Card
          tag="🥅"
          tag_bg="#DEE9FC"
          title="Ask Targeted and Specific Questions"
          description="Avoid vague or open-ended questions that may not yield actionable insights."
          image={photo_1}
        />
        <Card
          tag="💬"
          tag_bg="#FBE5E6"
          title="Prioritize and Respond to Feedback"
          description="Communicate the changes or improvements you've made in response to their feedback."
          image={photo_3}
        />
      </div>
    </div>
  );
}

export default App;
