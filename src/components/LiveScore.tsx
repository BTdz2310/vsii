import dayjs from 'dayjs'
import { Pause, X } from 'lucide-react'
import React from 'react'
// import { data } from 'src/data'

const matchStatus = {
  'FINISHED': (
    <p className='text-red-500'>FT</p>
  ),
  'IN_PLAY': (
    <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></div>
  ),
  'PAUSED': (
    <Pause className='text-gray-400' />
  ),
  'CANCELLED': (
    <X className='text-red-600' />
  )
}

const LiveScore = ({ data }) => {
  if (!data) return null
  return (
    <div className='bg-dark dark:bg-white text-[#eaeaea] dark:text-dark px-12 py-12 z-10 relative flex gap-6 flex-col'>
      <h3 className='font-bold text-2xl uppercase tracking-wider font-quicksand'>Kết quả bóng đá</h3>
      <div className='flex overflow-auto overflow-invisible gap-4'>
        {(data.matches ?? []).reverse().map((match, index) => (
          <div key={index} className='shrink-0 flex flex-col gap-2 !border-[gray] shadow-lg border-[1px] bg-[#1a1a1a] dark:bg-[#f0f0f0] px-6 py-2 rounded-2xl'>
            <div className='flex justify-between items-center h-[32px]'>
              {match.status === 'TIMED' ? (
                <p>{dayjs(match.utcDate).format('HH:mm')}</p>
              ) : (
                <>{matchStatus[match.status]}</>
              )}
              <div className='flex gap-2 items-center'>
                {/* <p>{match.competition.code}</p> */}
                <img src={match.competition.emblem} alt="" className='w-4 h-auto object-contain' />
              </div>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-1 items-center'>
              <img src={match.homeTeam.crest} alt="" className='w-5' />
              <p><abbr title={match.homeTeam.name} className='no-underline'>{match.homeTeam.tla}</abbr></p>
              <p>{match.score.fullTime.home}</p>
              <img src={match.awayTeam.crest} alt="" className='w-5' />
              <p><abbr title={match.awayTeam.name} className='no-underline'>{match.awayTeam.tla}</abbr></p>
              <p>{match.score.fullTime.away}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveScore