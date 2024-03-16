

const Counter = () => {



    return (
      <div>
        <h1 className="text-5xl text-center my-10">Redux Counter</h1>
        <div className="flex justify-center items-center gap-10">
          <button
          
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment by 5
          </button>
          <button
          
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment
          </button>
          <h1 className="text-3xl">0</h1>
          <button
          
            className="bg-red-400 px-4 py-2 m-2"
          >
            Decrement
          </button>
          <button
          
            className="bg-green-400 px-4 py-2 m-2"
          >
            Increment by 5
          </button>
        </div>
      </div>
    );
};

export default Counter;