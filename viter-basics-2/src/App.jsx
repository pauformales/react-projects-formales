import React from "react";

function HomeButton({ buttonFunction, buttonText }) {
  return (
    <button
      onClick={buttonFunction}
      className="border-2 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all ease-in-out"
    >
      {buttonText}
    </button>
  );
}

export default function App() {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("#ffffff");
  const colorRef = React.useRef();

  const incrementButton = () => {
    setCount(count + 1);
    console.log("Incremented");
  };

  const decrementButton = () => {
    if (count === 0) {
      alert("Counter can't be negative.");
      return;
    }
    setCount(count - 1);
    console.log("Decremented");
  };

  const handleSubmitChangeBackgroundColor = (e) => {
    e.preventDefault();
    setColor(colorRef.current.value);
  };

  const user = {
    name: "Adebayo Kelechi",
    bio: "Frontend Developer & UX Enthusiast",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s",
    imageSize: 80,
  };

  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div style={{ backgroundColor: color }} className="h-[100dvh]">
        <div className="flex justify-center items-center flex-col h-[100dvh] w-full">
          <p className="text-xl">Counter: {count}</p>
          <h1 className="py-5 text-center underline font-bold text-3xl text-red-600">
            Welcome to React Boi!
          </h1>

          <div className="flex gap-2">
            <HomeButton
              buttonFunction={incrementButton}
              buttonText={"Incremented"}
            />
            <HomeButton
              buttonFunction={decrementButton}
              buttonText={"Decremented"}
            />
          </div>

          <hr className="border-1 border-black w-[60%] mt-5" />
          <p className="text-center py-5 ">
            Choose a color to change the background
          </p>

          <form
            onSubmit={handleSubmitChangeBackgroundColor}
            className="flex gap-4"
          >
            <input
              ref={colorRef}
              type="color"
              className="px-4 h-[43.2px] w-[82.5px] py-2 border-2 border-gray-200 rounded-md cursor-pointer"
            />
            <button
              type="submit"
              className="border-2 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all ease-in-out"
            >
              Submit
            </button>
          </form>

          <hr className="border-1 border-black w-[60%] my-5" />

          <ul>
            {numbers.map((item, key) => (
              <li key={key}>Number: {item}</li>
            ))}
          </ul>

          <div className="flex justify-center items-center flex-col w-full">
            <hr className="border-1 border-black w-[60%] my-5" />

            <div className="w-[410px] h-[230px] bg-white rounded-2xl shadow-md relative">
              <div className="h-[100px] w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-2xl" />

              <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2">
                <img
                  src={user.imageUrl}
                  alt={"User Profile"}
                  className="rounded-full border-4 border-white"
                  style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="mt-[45px] text-center px-4">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
