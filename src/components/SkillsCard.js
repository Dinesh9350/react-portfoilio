import React from 'react';

const SkillsCard = ({ title, img, icon, note }) => {
  return (
    <div className='p-3.5 rounded-xl bg-warm-50 dark:bg-charcoal-850 border border-warm-200 dark:border-charcoal-800 flex items-start gap-3 transition hover:border-neutral-400 dark:hover:border-charcoal-700 text-left'>
      <div className='text-2xl mt-0.5 flex-shrink-0'>
        {icon ? (
          icon
        ) : img ? (
          <img src={img} alt={title} className='w-6 h-6 object-contain' />
        ) : null}
      </div>
      <div>
        <div className='text-sm font-bold text-neutral-900 dark:text-white'>
          {title}
        </div>
        {note && (
          <div className='text-xs text-neutral-600 dark:text-neutral-400 mt-0.5'>
            {note}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsCard;
