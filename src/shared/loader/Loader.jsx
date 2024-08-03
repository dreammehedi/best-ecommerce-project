import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[99999999]">
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    </>
  );
}

export default Loader;
