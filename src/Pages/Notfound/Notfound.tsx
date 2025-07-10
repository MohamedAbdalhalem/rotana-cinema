import notFoundImage from '/src/assets/Disney-Photoroom.png'

export default function Notfound() {
  return (
    <div className='p-5 md:h-[80vh]'>
      <img src={notFoundImage} className='w-full h-full' alt="no-found" />
    </div>
  )
}
