#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Abstract Class 
class AbstractShip {
    virtual void askForMaintenance() = 0;
    virtual void askForRefueling() = 0;
};

// Abstract Class 
class AbstractEmployee {
    virtual void askForPromotion() = 0;
};

// Ship Class 
class Ship {
protected: 
    int MaintenanceHour = 4000;
    string Company;
    string Destination;
    string ShipType;
    float FuelPrice = 709; // Price in USD per 1 ton
    int SailingTime;

public: 
    Ship(string company, string destination, int sailingtime) {
        Company = company;
        Destination = destination;
        SailingTime = sailingtime;
    } 
    
    // Setter
    void changeDestination(string destination) {
        Destination = destination;
    }
    
    void changeShipType(string shiptype) {
        ShipType = shiptype;
    }

    // Getter
    virtual void getDestination() {
        cout << "Ship destination: " << Destination << " then go to Jakarta" << endl;
    }

    void getShipType() {
        cout << "Ship type\t: " << ShipType << endl;
    }

    // Abstraction Implementation 1
    void askForMaintenance() {
        int HourDifference = abs(MaintenanceHour-SailingTime);
        if (SailingTime > 5000) {
            cout << "Book Maintenance: The ship passed the maintenance schedule " << HourDifference << " hours ago. Please contact the port head" << endl;
        }
        else {
            cout << "Book Maintenance: Cannot book the maintenance now! Your next maintenance time is the next " << HourDifference << " hours" << endl;
        }
    }
};

class Employee {
protected: 
    string Name;
    string Role;
    int Age;
public: 
    Employee(string name, string role, int age) {
        Name = name;
        Role = role;
        Age = age;
    }
};

class MotorBoat: public Ship, public Employee {
protected:
    float FuelCapacity; // in tons
public:
    MotorBoat(string company, string destination, int sailingtime, string name, string role, int age, float fuelcapacity)
        :Ship(company, destination, sailingtime), Employee(name, role, age)
    {
        changeShipType("Motor Boat");
        FuelCapacity = fuelcapacity;
    }

    void getDestination() {
        cout << "Ship destination: " << Destination << " then go to Pulau Kapuk" << endl;
    }

    // Abstraction Implementation
    void askForRefueling() {
        int price = FuelPrice * FuelCapacity;
        cout << "Refueling cost\t: $" << price << endl;
    }
};

class SailBoat: public Ship, public Employee {
protected:
    float FuelCapacity; // in tons
public:
    SailBoat(string company, string destination, int sailingtime, string name, string role, int age, float fuelcapacity)
        :Ship(company, destination, sailingtime), Employee(name, role, age)
    {
        changeShipType("Sail Boat");
        FuelCapacity = fuelcapacity;
    }

    void getDestination() {
        cout << "Ship destination: " << Destination << " then go to India" << endl;
    }

    // Abstraction Implementation
    void askForRefueling() {
        int price = FuelPrice * FuelCapacity;
        cout << "Refueling cost\t: $" << price << endl;
    }
};

class CruiseShip: public Ship, public Employee {
protected:
    float FuelCapacity; // in tons
public:
    CruiseShip(string company, string destination, int sailingtime, string name, string role, int age, float fuelcapacity)
        :Ship(company, destination, sailingtime), Employee(name, role, age)
    {
        changeShipType("Cruise Ship");
        FuelCapacity = fuelcapacity;
    }

    void getDestination() {
        cout << "Ship destination: " << Destination << " then go to Canada" << endl;
    }

    // Abstraction Implementation 2
    void askForRefueling() {
        int price = FuelPrice * FuelCapacity;
        cout << "Refueling cost\t: $" << price << endl;
    }
};

int main() {
    MotorBoat ship1 = MotorBoat("PT PAL", "Kepulauan Seribu", 3000, "Eka Ramdani", "Driver", 55, 0.1);
    SailBoat ship2 = SailBoat("PT Pelindo", "Lebanon", 4000, "Romli Rizal", "Captain", 55, 0.2);
    CruiseShip ship3 = CruiseShip("PT Lundin", "USA", 5500, "Marc Andre", "Captain", 55, 300);

    // Polymorphism
    Ship* s1 = &ship1;
    s1 -> getDestination();

    ship1.getShipType();
    ship1.changeDestination("Pantai Indah Kapuk");
    ship1.askForRefueling();
    ship1.askForMaintenance();
    cout << endl;
    
    // Polymorphism
    Ship* s2 = &ship2;
    s2 -> getDestination();

    ship2.changeDestination("Turkey");
    ship2.getShipType();
    ship2.askForRefueling();
    ship2.askForMaintenance();
    cout << endl;
    
    // Polymorphism
    Ship* s3 = &ship3;
    s3 -> getDestination();

    ship3.changeDestination("Norway");
    ship3.getShipType();
    ship3.askForRefueling();
    ship3.askForMaintenance();
    cout << endl;
}

/*
Output:

Ship destination: Kepulauan Seribu then go to Pulau Kapuk
Ship type       : Motor Boat
Refueling cost  : $70
Book Maintenance: Cannot book the maintenance now! Your next maintenance time is the next 1000 hours

Ship destination: Lebanon then go to India
Ship type       : Sail Boat
Refueling cost  : $141
Book Maintenance: Cannot book the maintenance now! Your next maintenance time is the next 0 hours

Ship destination: USA then go to Canada
Ship type       : Cruise Ship
Refueling cost  : $212700
Book Maintenance: The ship passed the maintenance schedule 1500 hours ago. Please contact the port head
*/