import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "35mm Cameras",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-53048445-1525186254.jpg?crop=1xw:0.9021797631862217xh;center,top&resize=2048:*",
    },
    {
      id: 2,
      title: "Medium format Cameras",
      imageUrl:
        "https://res.cloudinary.com/jerrick/image/upload/v1522706856/zhltgtpnqfkb4hz88kuz.jpg",
    },
    {
      id: 3,
      title: "Digital Cameras",
      imageUrl:
        "https://i.pinimg.com/originals/4f/fd/3e/4ffd3e8b1c65dd414a533ef547f95f27.jpg",
    },
    {
      id: 4,
      title: "Large format Cameras",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ansel_Adams_and_camera.jpg/800px-Ansel_Adams_and_camera.jpg",
    },
    {
      id: 5,
      title: "Disposable  Cameras",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205213604.jpg?crop=1.00xw:0.334xh;0,0.0501xh&resize=1200:*",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
