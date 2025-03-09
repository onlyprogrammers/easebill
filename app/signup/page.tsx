"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [isChecking, setIsChecking] = useState(false)
  const [userExists, setUserExists] = useState(false)

  // Form data
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    businessType: "",
    termsAccepted: false,
  })

  const [companyData, setCompanyData] = useState({
    companyName: "",
    gstin: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    industry: "",
    employees: "",
    turnover: "",
    logo: null,
  })

  const handleUserDataChange = (e) => {
    const { id, value, type, checked } = e.target
    setUserData({
      ...userData,
      [id]: type === "checkbox" ? checked : value,
    })
  }

  const handleCompanyDataChange = (e) => {
    const { id, value } = e.target
    setCompanyData({
      ...companyData,
      [id]: value,
    })
  }

  const handleSelectChange = (field, value) => {
    if (step === 1) {
      setUserData({
        ...userData,
        [field]: value,
      })
    } else {
      setCompanyData({
        ...companyData,
        [field]: value,
      })
    }
  }

  const handleRadioChange = (field, value) => {
    setCompanyData({
      ...companyData,
      [field]: value,
    })
  }

  const checkUserExists = () => {
    setIsChecking(true)

    // Simulate API call to check if user exists
    setTimeout(() => {
      setIsChecking(false)
      // For demo purposes, we'll say the user doesn't exist
      setUserExists(false)

      // Move to next step if user doesn't exist
      if (!userExists) {
        setStep(2)
        setProgress(50)
      }
    }, 1500)
  }

  const handleSubmitUserData = (e) => {
    e.preventDefault()
    checkUserExists()
  }

  const handleSubmitCompanyData = (e) => {
    e.preventDefault()
    setStep(3)
    setProgress(75)
  }

  const handleSubmitFinal = (e) => {
    e.preventDefault()
    setStep(4)
    setProgress(100)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSubmitUserData} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={userData.firstName}
                  onChange={handleUserDataChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={userData.lastName}
                  onChange={handleUserDataChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={userData.email}
                onChange={handleUserDataChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={userData.phone}
                onChange={handleUserDataChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={userData.password}
                onChange={handleUserDataChange}
                required
              />
              <p className="text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select onValueChange={(value) => handleSelectChange("businessType", value)}>
                <SelectTrigger id="businessType">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="wholesale">Wholesale & Distribution</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="termsAccepted"
                checked={userData.termsAccepted}
                onCheckedChange={(checked) => setUserData({ ...userData, termsAccepted: checked })}
                required
              />
              <Label htmlFor="termsAccepted" className="text-sm leading-none pt-0.5">
                I agree to the{" "}
                <Link href="/terms" className="text-red-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-red-600 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isChecking}>
              {isChecking ? "Checking..." : "Continue"}
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-red-600 hover:underline">
                Log in
              </Link>
            </div>
          </form>
        )
      case 2:
        return (
          <form onSubmit={handleSubmitCompanyData} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                placeholder="ABC Enterprises"
                value={companyData.companyName}
                onChange={handleCompanyDataChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gstin">GSTIN (GST Identification Number)</Label>
              <Input
                id="gstin"
                placeholder="22AAAAA0000A1Z5"
                value={companyData.gstin}
                onChange={handleCompanyDataChange}
                required
              />
              <p className="text-xs text-gray-500">15-digit GST number</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Textarea
                id="address"
                placeholder="123 Business Street"
                value={companyData.address}
                onChange={handleCompanyDataChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  placeholder="Mumbai"
                  value={companyData.city}
                  onChange={handleCompanyDataChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select onValueChange={(value) => handleSelectChange("state", value)}>
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pincode">PIN Code</Label>
              <Input
                id="pincode"
                placeholder="400001"
                value={companyData.pincode}
                onChange={handleCompanyDataChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="it">Information Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStep(1)
                  setProgress(25)
                }}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                Continue
              </Button>
            </div>
          </form>
        )
      case 3:
        return (
          <form onSubmit={handleSubmitFinal} className="space-y-6">
            <div className="space-y-2">
              <Label>Number of Employees</Label>
              <RadioGroup defaultValue="1-10" onValueChange={(value) => handleRadioChange("employees", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-10" id="employees-1" />
                  <Label htmlFor="employees-1">1-10</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="11-50" id="employees-2" />
                  <Label htmlFor="employees-2">11-50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="51-200" id="employees-3" />
                  <Label htmlFor="employees-3">51-200</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="201+" id="employees-4" />
                  <Label htmlFor="employees-4">201+</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Annual Turnover</Label>
              <RadioGroup defaultValue="<40L" onValueChange={(value) => handleRadioChange("turnover", value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="<40L" id="turnover-1" />
                  <Label htmlFor="turnover-1">Less than ₹40 Lakhs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="40L-1.5Cr" id="turnover-2" />
                  <Label htmlFor="turnover-2">₹40 Lakhs - ₹1.5 Crore</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1.5Cr-5Cr" id="turnover-3" />
                  <Label htmlFor="turnover-3">₹1.5 Crore - ₹5 Crore</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5Cr+" id="turnover-4" />
                  <Label htmlFor="turnover-4">More than ₹5 Crore</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Company Logo (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Drag and drop your logo here, or click to browse</p>
                <p className="mt-1 text-xs text-gray-400">PNG, JPG or SVG (max. 2MB)</p>
                <Button type="button" variant="outline" size="sm" className="mt-4">
                  Upload Logo
                </Button>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStep(2)
                  setProgress(50)
                }}
              >
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                Complete Registration
              </Button>
            </div>
          </form>
        )
      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold">Registration Complete!</h2>
            <p className="text-gray-500">
              Your account has been successfully created. You can now start using BillEase.
            </p>
            <div className="pt-4">
              <Link href="/dashboard">
                <Button className="bg-red-600 hover:bg-red-700">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container max-w-[1400px] px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 text-white p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <span className="text-xl font-bold text-red-600">BillEase</span>
        </Link>
        <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-red-600">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">
                  Step {step} of 4:{" "}
                  {step === 1
                    ? "Account Details"
                    : step === 2
                      ? "Company Information"
                      : step === 3
                        ? "Business Details"
                        : "Complete"}
                </span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <CardTitle>
              {step === 1
                ? "Create your BillEase account"
                : step === 2
                  ? "Tell us about your company"
                  : step === 3
                    ? "Additional business details"
                    : "Registration Complete"}
            </CardTitle>
            <CardDescription>
              {step === 1
                ? "Start your 14-day free trial. No credit card required."
                : step === 2
                  ? "We need this information for GST compliance."
                  : step === 3
                    ? "Help us customize BillEase for your business."
                    : "Your account has been successfully created."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {userExists && (
              <Alert className="mb-4 bg-red-50 border-red-200">
                <AlertDescription className="text-red-600">
                  An account with this email already exists. Please{" "}
                  <Link href="/login" className="font-medium underline">
                    log in
                  </Link>{" "}
                  instead.
                </AlertDescription>
              </Alert>
            )}
            {renderStep()}
          </CardContent>
        </Card>
      </div>

      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        <p>© {new Date().getFullYear()} BillEase. All rights reserved.</p>
      </footer>
    </div>
  )
}

