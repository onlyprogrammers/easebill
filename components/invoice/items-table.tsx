"use client";

import type React from "react";
import { useInvoice } from "./invoice-context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ItemsTable() {
  const { items, addItem, removeItem } = useInvoice();
  const [newItem, setNewItem] = useState({
    name: "",
    unitPrice: 1,
    quantity: 1,
    basicPrice: 1, // Corrected initial value
    gst: 0,
    gstAmount: 0,
    totalAmount: 0,
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.basicPrice > 0) {
      addItem(newItem);
      setNewItem({
        name: "",
        unitPrice: 1,
        quantity: 1,
        basicPrice: 1,
        gst: 0,
        gstAmount: 0,
        totalAmount: 0,
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const numericValue = ["quantity", "unitPrice", "gst"].includes(name)
      ? Number(value)
      : value;

    setNewItem((prev) => {
      const updatedItem = {
        ...prev,
        [name]: numericValue,
      };

      // Recalculate values dynamically
      updatedItem.basicPrice = updatedItem.unitPrice * updatedItem.quantity;
      updatedItem.gstAmount = (updatedItem.basicPrice * updatedItem.gst) / 100;
      updatedItem.totalAmount = updatedItem.basicPrice + updatedItem.gstAmount;

      return updatedItem;
    });
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.No.</TableHead>
            <TableHead>Item/Product</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Basic Amount</TableHead>
            <TableHead>GST</TableHead>
            <TableHead>GST Amount</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>₹{item.unitPrice.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>₹{item.basicPrice.toFixed(2)}</TableCell>
              <TableCell>{item.gst}%</TableCell>
              <TableCell>₹{item.gstAmount.toFixed(2)}</TableCell>
              <TableCell>₹{item.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeItem(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>{items.length + 1}</TableCell>
            <TableCell>
              <Input
                placeholder="Item name"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
              />
            </TableCell>
            <TableCell>
              <Input
                type="number"
                name="unitPrice"
                value={newItem.unitPrice}
                onChange={handleInputChange}
                min={0}
                step={0.01}
              />
            </TableCell>
            <TableCell>
              <Input
                type="number"
                name="quantity"
                value={newItem.quantity}
                onChange={handleInputChange}
                min={1}
              />
            </TableCell>
            <TableCell>₹{newItem.basicPrice.toFixed(2)}</TableCell>
            <TableCell>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background
                file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50 md:text-sm appearance-none"
                name="gst"
                value={newItem.gst}
                onChange={handleInputChange}
                style={{ width: "max-content" }}
              >
                <option value="" disabled>
                  GST <ChevronDown />
                </option>
                <option value="0">0%</option>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </TableCell>
            <TableCell>₹{newItem.gstAmount.toFixed(2)}</TableCell>
            <TableCell>₹{newItem.totalAmount.toFixed(2)}</TableCell>
            <TableCell>
              <Button onClick={handleAddItem}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
