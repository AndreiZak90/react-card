interface CardsProps {
  image?: string;
  children: React.ReactNode;
}

export default function Modal({ children, image }: CardsProps) {
  return (
    <>
      <div className="card">
        {image ? <img src={image} alt="" className="img_card" /> : <></>}
        {children}
      </div>
    </>
  );
}
