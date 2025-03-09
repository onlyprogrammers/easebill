import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, CreditCard, FileText, LayoutGrid, Package, Smartphone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import top1 from '@/images/top1.png'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1 rounded">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-blue-600">BillEase</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Support
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="hidden md:block text-sm font-medium hover:text-blue-600">
              Login
            </Link>
            <Link href="/signup" className="hidden md:block text-sm font-medium hover:text-blue-600">
            <Button className="bg-blue-600 hover:bg-red-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  GST Billing Software in India for Small Businesses
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simplify your business operations with our comprehensive GST billing solution. Create invoices, manage
                  inventory, and file GST returns effortlessly.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 hover:bg-red-700">Download Now</Button>
                  <Button variant="outline">Watch Demo</Button>
                </div>
              </div>
              <div className="lg:order-last flex justify-center">
                <Image
                  src={top1}
                  width={400}
                  height={400}
                  alt="BillEase Software Dashboard"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Icons */}
        <section className="border-t border-b py-8">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <FileText className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">Invoices</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Smartphone className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">Mobile App</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LayoutGrid className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">GSTR-1/3B</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Package className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">Inventory</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">Multi-User</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-16">
              {/* Feature 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Create GST Bills for customers and share them online
                  </h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Generate professional GST-compliant invoices in seconds. Customize templates, add your logo, and
                    share invoices via WhatsApp, email, or SMS.
                  </p>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Link href="#" className="text-sm font-medium">
                      Learn more
                    </Link>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="lg:order-last">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="GST Billing Feature"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-last lg:order-first">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Inventory Management Feature"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Manage Inventory Seamlessly</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Keep track of your stock levels in real-time. Get low stock alerts, manage multiple warehouses, and
                    generate inventory reports with ease.
                  </p>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Link href="#" className="text-sm font-medium">
                      Learn more
                    </Link>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    Send Payment Reminders to Recover Dues
                  </h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Never miss a payment again. Set up automated reminders for overdue invoices and improve your cash
                    flow with our payment tracking system.
                  </p>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Link href="#" className="text-sm font-medium">
                      Learn more
                    </Link>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="lg:order-last">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Payment Reminders Feature"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-last lg:order-first">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="GST Filing Feature"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                    GST filing made simpler and faster
                  </h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Generate GSTR-1 and GSTR-3B reports automatically. Export data in the required format and submit
                    your GST returns without any hassle.
                  </p>
                  <div className="flex items-center gap-1 text-blue-600">
                    <Link href="#" className="text-sm font-medium">
                      Learn more
                    </Link>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of GST Billing Software</h2>
              <p className="mt-4 text-gray-500 md:text-lg/relaxed max-w-3xl mx-auto">
                Our comprehensive solution helps you streamline your business operations and stay compliant with GST
                regulations.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Effortless GST Compliance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automatic tax calculation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">GSTR-1 & GSTR-3B report generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">HSN code management</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Simplified Inventory Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time stock tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Low stock alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Barcode scanning support</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Enhanced Business Insights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Comprehensive sales reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Profit & loss analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customer purchase patterns</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Time & Cost Savings</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated invoice generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduced manual errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No need for expensive accountants</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Multi-device Accessibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Desktop & mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cloud data synchronization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Work from anywhere</span>
                  </li>
                </ul>
              </div>

              {/* Benefit 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Secure Data Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Encrypted data storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Regular automatic backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Role-based access control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Built for your Industry</h2>
              <p className="mt-4 text-gray-500 md:text-lg/relaxed max-w-3xl mx-auto">
                Our GST billing software is designed to cater to the specific needs of various industries across India.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Retail & E-commerce</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Manage your inventory, generate invoices instantly, and track sales across multiple channels with our
                  comprehensive retail solution.
                </p>
                <div className="flex items-center gap-1 text-blue-600">
                  <Link href="#" className="text-sm font-medium">
                    Learn more
                  </Link>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Manufacturing</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Track raw materials, manage production costs, and generate GST-compliant invoices for your
                  manufacturing business.
                </p>
                <div className="flex items-center gap-1 text-blue-600">
                  <Link href="#" className="text-sm font-medium">
                    Learn more
                  </Link>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Services & Consulting</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Create professional service invoices, track billable hours, and manage client payments with our
                  service industry solution.
                </p>
                <div className="flex items-center gap-1 text-blue-600">
                  <Link href="#" className="text-sm font-medium">
                    Learn more
                  </Link>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Distribution & Wholesale</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Manage bulk orders, track inventory across warehouses, and streamline your distribution business with
                  our GST software.
                </p>
                <div className="flex items-center gap-1 text-blue-600">
                  <Link href="#" className="text-sm font-medium">
                    Learn more
                  </Link>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-500 md:text-lg/relaxed max-w-3xl mx-auto">
                Find answers to common questions about our GST billing software.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-red-50 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium">
                    What is GST billing software?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 text-gray-500">
                    GST billing software is a digital solution that helps businesses create GST-compliant invoices,
                    manage inventory, track sales and purchases, and generate GST returns reports automatically.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-red-50 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium">
                    How much does a billing software cost?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 text-gray-500">
                    Our GST billing software starts at ₹599 per month with annual plans offering significant discounts.
                    We also offer a free trial so you can test all features before purchasing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-red-50 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium">
                    Which industries can use this billing software?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 text-gray-500">
                    Our GST billing software is designed for various industries including retail, manufacturing,
                    services, wholesale, distribution, and e-commerce businesses across India.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-red-50 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium">
                    What is the best free billing software for PC?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 text-gray-500">
                    While we offer a free trial with full features, our software requires a subscription for continued
                    use. The free version has limitations on the number of invoices and features available.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-red-50 rounded-lg">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium">
                    How do I create invoices in this GST software?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-0 text-gray-500">
                    Creating invoices is simple - just select a customer, add products or services, and the software
                    automatically calculates taxes and generates a professional GST-compliant invoice that you can print
                    or share digitally.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Useful Was This Page?</h2>
            </div>
            <div className="flex justify-center items-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Star key={rating} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-center text-gray-500">
              <p>Average rating: 4.8/5 based on 1,245 reviews</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to simplify your GST billing?
            </h2>
            <p className="max-w-3xl mx-auto mb-8 opacity-90">
              Join thousands of businesses across India who trust our software for their GST billing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Download Now</Button>
              <Button variant="outline" className="border-white text-white hover:bg-red-700">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1 rounded">
                  <FileText className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-white">BillEase</span>
              </div>
              <p className="text-sm mb-4">India's most trusted GST billing software for small businesses.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Our Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    GST Billing Software
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Inventory Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    E-way Bill Software
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    E-invoicing Solution
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">© {new Date().getFullYear()} BillEase. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm hover:text-white">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

