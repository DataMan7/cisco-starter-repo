import IPAddress from './IPAddress';

const MyContainer = () => {
  return (
    <div>
      <IPAddress type="IPv4" />
      <IPAddress type="IPv6" />
    </div>
  );
};

export default MyContainer;
