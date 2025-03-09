'use-client'
import {Smartphone, Monitor} from 'lucide-react'

export default function DownloadOption(){
return <>

 <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available on Mobile and Desktop</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <Smartphone className="h-12 w-12 text-blue-600 mb-2" />
              <h3 className="font-medium text-gray-900">Mobile App</h3>
              <p className="text-gray-600">Free Version</p>
            </div>
            <div className="flex flex-col items-center">
              <Monitor className="h-12 w-12 text-blue-600 mb-2" />
              <h3 className="font-medium text-gray-900">Desktop Software</h3>
              <p className="text-gray-600">₹3,420.82/year</p>
            </div>
          </div>
        </section>
</>
}