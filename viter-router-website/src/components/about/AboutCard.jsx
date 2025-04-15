const AboutCard = ({ title, content }) => {
  return (
    <div>
      <h3 className="font-bold mb-2 text-lg">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default AboutCard;
