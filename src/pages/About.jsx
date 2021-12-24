function About() {
  return (
    <>
      <h1>Hi this is sumit</h1>
      {process.env.REACT_APP_GITHUB_TOKEN}
    </>
  );
}

export default About;
