import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline'

//<div className='flex w-full max-w-lg itens-center text-gray-700 text-sm lg:text-base lg:justify-start justify-evenly'>

const HeaderOptions = () => {
    return (
        <div className='flex w-full max-w-2xl itens-center px-6 lg:px-0 justify-between lg:justify-between lg:ml-44 text-gray-700 text-sm lg:text-base'>
            <div className="flex space-x-4">
                <HeaderOption title="All" selected Icon={SearchIcon} />
                <HeaderOption title="Images" Icon={PhotographIcon} />
                <HeaderOption title="Videos" Icon={PlayIcon} />
                <HeaderOption title="News" Icon={NewspaperIcon} />
                <HeaderOption title="Maps" Icon={MapIcon} />
                <HeaderOption title="More" Icon={DotsVerticalIcon} />
            </div>
            <div className='flex space-x-4'>
                <p className='cursor-pointer'>Settings</p>
                <p className='cursor-pointer'>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
