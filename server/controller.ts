import model from './model';

class Controller {
  constructor() {}

  getCrushes() {
    return model.find({});
  }

  select(req, res) {
    this.getCrushes().then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }

  getCrushesById(id) {
    return model.findById(id);
  }

  selectOne(req, res) {
    const id = { _id: req.params.id }
    this.getCrushesById(id).then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }

  updateCrush(id, data) {
    return model.findOneAndUpdate(id, data);
  }

  update(req, res) {
    const id = { _id: req.params.id };
    const crush = req.body;
    this.updateCrush(id, crush).then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }

  insertCrush(data) {
    return model.create(data);
  }

  insert(req, res) {
    const crush = req.body;
    this.insertCrush(crush).then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }

  deleteById(id) {
    return model.deleteOne(id);
  }

  delete(req, res) {
    const id = { _id: req.params.id }
    this.deleteById(id).then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }
}

export default Controller;