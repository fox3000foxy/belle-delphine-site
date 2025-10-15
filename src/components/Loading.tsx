import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-gradient-to-br from-belle-500 via-belle-600 to-belle-800 flex items-center justify-center z-50'>
      <div className='text-center'>
        
        <div className='mb-8'>
          <div className='w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse'>
            <FontAwesomeIcon icon='heart' className='text-3xl text-white animate-bounce' />
          </div>
        </div>

        
        <h1 className='font-display text-3xl font-bold text-white mb-4'>Belle Delphine</h1>
        <p className='text-belle-100 mb-8'>Loading amazing content...</p>

        
        <div className='w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden'>
          <div className='h-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse'></div>
        </div>

        
        <div className='mt-8'>
          <FontAwesomeIcon icon='spinner' className='text-3xl text-white animate-spin' />
        </div>
      </div>
    </div>
  );
};

export default Loading;


