import React from 'react';
import { useAuth } from '../utilities/use-auth';
import { useNavigate } from 'react-router-dom';
import { Container, Hero, Button, Card } from '../components';

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (authenticated) {
      navigate('notes/new');
      return;
    }

    navigate('register');
  };

  return (
    <div>
      <Hero
        className="py-16 bg-base-200"
        title="D&D NoteMaster"
        subtitle="The best app to manage your Dungeons & Dragons notes."
      >
        <Button color="primary" size="lg" className="text-white" onClick={handleClick}>
          Start Taking Notes
        </Button>
      </Hero>
      <div className="mx-10">
        <Container className="py-16">
          <h2 className="mb-4 text-2xl font-bold text-center">Welcome to D&D NoteMaster</h2>
          <p className="mb-8 text-lg">
            D&D NoteMaster is your digital companion for your D&D adventures. Easily create, manage, and organize your
            campaign notes. Track your quests, NPCs, and party members, all in one place. Dive deeper into your campaign
            with D&D NoteMaster!
          </p>
        </Container>
        <Container>
          <h2 className="mb-4 text-2xl font-bold text-center">Key Features</h2>
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Read Notes</h2>
                <p>Easily read and navigate through your notes.</p>
              </div>
            </Card>
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Add Notes</h2>
                <p>Create new notes with ease and detail.</p>
              </div>
            </Card>
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Edit Notes</h2>
                <p>Update your notes as your campaign evolves.</p>
              </div>
            </Card>
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Delete Notes</h2>
                <p>Remove old notes with just a click.</p>
              </div>
            </Card>
          </div>
        </Container>
        <Container className="py-16">
          <h2 className="mb-4 text-2xl font-bold text-center">Testimonials</h2>
          <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Tiamat, Queen of Dragons</h2>
                <p>D&D NoteMaster helps me keep my followers and lore organized. Highly recommended!</p>
              </div>
            </Card>
            <Card className="shadow">
              <div className="card-body">
                <h2 className="card-title">Bahamut, the Platinum Dragon</h2>
                <p>
                  As a deity of D&D, I've seen many tools, but D&D NoteMaster stands out with its convenience and ease
                  of use.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Home;
