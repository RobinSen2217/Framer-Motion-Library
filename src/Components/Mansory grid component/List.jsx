import React from "react";
import Card from "./Card";
function List({ setSelected }) {
  const items = [
    {
      id: 1,
      url: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j1phplfUkt-F1EAB3ieH1liY7MD_GvOg3Q&usqp=CAU",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTnICbjZjEc6kJGY9sRUb-ryEUi9hK0AXZKyYGNxdt1GBpkCrSOg80EY9QrJda-Sew-Y&usqp=CAU",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 4,
      url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 9,
      url: "https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 10,
      url: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 11,
      url: "https://i.pinimg.com/originals/ed/78/11/ed78116c19573356cd2519cf1f4e73d7.jpg",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
    {
      id: 12,
      url: "https://th.bing.com/th/id/OIG.b7fbyFnoRp_h0eDim7rl",
      title: "Lorem ipsum",
      description: "Lorem ipsum ipsum lorem",
      tags: ["Mountain", "Aesthetic", , "Pretty", "Scenic", "Rugged"],
    },
  ];
  return (
    <div className="columns-2 md:columns-3 xl:columns-4 gap-4 ">
      {items.map((item) => {
        return <Card key={item.id} setSelected={setSelected} item={item} />;
      })}
    </div>
  );
}

export default List;
