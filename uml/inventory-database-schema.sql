CREATE TABLE Company (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    subscription_type VARCHAR(50)
);

CREATE TABLE Category (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE User (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(50),
    company_id VARCHAR(36),
    FOREIGN KEY (company_id) REFERENCES Company(id)
);

CREATE TABLE Item (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    quantity INT,
    min_quantity INT,
    category_id VARCHAR(36),
    company_id VARCHAR(36),
    FOREIGN KEY (category_id) REFERENCES Category(id),
    FOREIGN KEY (company_id) REFERENCES Company(id)
);

CREATE TABLE Notification (
    id VARCHAR(36) PRIMARY KEY,
    item_id VARCHAR(36),
    message VARCHAR(255),
    date TIMESTAMP,
    is_read BOOLEAN,
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Sales (
    id VARCHAR(36) PRIMARY KEY,
    item_id VARCHAR(36),
    quantity_sold INT,
    date TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE Prediction (
    id VARCHAR(36) PRIMARY KEY,
    item_id VARCHAR(36),
    expected_demand INT,
    prediction_date TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES Item(id)
);