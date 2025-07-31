import notFoundImage from '/src/assets/Disney-Photoroom.png'

export default function Notfound() {
  return (
    <div className='px-5 pb-5 pt-15 md:h-[80vh]'>
      <img src={notFoundImage} className='w-full h-full' alt="no-found" />
    </div>
  )
}
