import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-gradient-to-br from-lljt-500 via-lljt-600 to-lljt-800 flex items-center justify-center z-50'>
      <div className='text-center'>
        {/* Logo animé */}
        <div className='mb-8'>
          <div className='w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-pulse'>
            <FontAwesomeIcon icon='graduation-cap' className='text-3xl text-white animate-bounce' />
          </div>
        </div>

        {/* Texte de chargement */}
        <h1 className='font-display text-3xl font-bold text-white mb-4'>LLJT - Let's Learn Japanese Together</h1>
        <p className='text-lljt-100 mb-8'>Chargement en cours...</p>

        {/* Barre de progression animée */}
        <div className='w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden'>
          <div className='h-full bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse'></div>
        </div>

        {/* Spinner */}
        <div className='mt-8'>
          <FontAwesomeIcon icon='spinner' className='text-3xl text-white animate-spin' />
        </div>
      </div>
    </div>
  );
};

export default Loading;
