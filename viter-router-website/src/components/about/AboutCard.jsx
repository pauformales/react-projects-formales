const AboutCard = ({ title, content }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default AboutCard;
